import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Box, CircularProgress, IconButton, Tooltip } from "@mui/material";
import { NavLink, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import {
    FiCoffee,
    FiFacebook,
    FiGithub,
    FiGlobe,
    FiHeart,
    FiLinkedin,
    FiMail,
    FiMenu,
    FiMessageCircle,
    FiShield,
    FiX,
    FiYoutube,
} from "react-icons/fi";
import { SiCodepen } from "react-icons/si";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { Styled } from "./App.styled";

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Contact = lazy(() => import("./pages/contact"));
const NotFound = lazy(() => import("./pages/notFound"));

const pageLinks = [
    { name: "Accordion", link: "/accordion" }, { name: "Avataar", link: "/avataar" }, { name: "Calculator", link: "/calculator" },
    { name: "Calendar", link: "/calendar" }, { name: "Canvas Animation", link: "/canvasAnimation" }, { name: "Convert Metrics", link: "/convertMetrics" },
    { name: "Dictionary", link: "/dictionary" }, { name: "Digital Clock", link: "/digitalClock" }, { name: "Dynamic Tabs", link: "/dynamicTabs" },
    { name: "Github Profile Finder", link: "/githubProfileFinder" }, { name: "Hello World", link: "/helloWorld" }, { name: "HTML Colors", link: "/htmlColors" },
    { name: "Image Slider", link: "/imageSlider" }, { name: "Jokes Generator", link: "/jokesGenerator" }, { name: "LeetSpeak", link: "/leetSpeak" },
    { name: "Lyrics Finder", link: "/lyricsFinder" }, { name: "Memes Generator", link: "/memesGenerator" }, { name: "Modal Component", link: "/modalComponent" },
    { name: "Movie Search", link: "/movieSearch" }, { name: "Movie Trailer", link: "/movieTrailer" }, { name: "MUI Form", link: "/muiForm" },
    { name: "Paint App", link: "/paintApp" }, { name: "Password Generator", link: "/passwordGenerator" }, { name: "QR Code Generator", link: "/qrcodeGenerator" },
    { name: "Quiz App", link: "/quizApp" }, { name: "Random Quotes", link: "/randomQuotes" }, { name: "Rock Paper Scissor", link: "/rockPaperScissor" },
    { name: "Scroll Progress Indicator", link: "/scrollProgressIndicator" }, { name: "Scroll To", link: "/scrollTo" }, { name: "Search Autocomplete", link: "/searchAutoComplete" },
    { name: "Sorting", link: "/sorting" }, { name: "Star Rating", link: "/starRating" }, { name: "Sudoku", link: "/sudoku" }, { name: "Task Scheduler", link: "/taskScheduler" },
    { name: "Tic Tac Toe", link: "/ticTacToe" }, { name: "Todo List", link: "/todoList" }, { name: "Toggle Theme", link: "/toggleTheme" },
    { name: "Unicode Explorer", link: "/unicodeExplorer" }, { name: "Weather App", link: "/weatherApp" }, { name: "Word Meaning", link: "/wordMeaning" },
    { name: "World Time Zones", link: "/worldTimeZones" },
];

const componentMap = {
    "/accordion": lazy(() => import("./apps/Accordion")), "/avataar": lazy(() => import("./apps/Avataar")), "/calculator": lazy(() => import("./apps/Calculator")),
    "/calendar": lazy(() => import("./apps/Calendar")), "/canvasAnimation": lazy(() => import("./apps/CanvasAnimation")), "/convertMetrics": lazy(() => import("./apps/ConvertMetrics")),
    "/dictionary": lazy(() => import("./apps/Dictionary")), "/digitalClock": lazy(() => import("./apps/DigitalClock")), "/dynamicTabs": lazy(() => import("./apps/DynamicTabs")),
    "/githubProfileFinder": lazy(() => import("./apps/GithubProfileFinder")), "/helloWorld": lazy(() => import("./apps/HelloWorld")), "/htmlColors": lazy(() => import("./apps/HtmlColors")),
    "/imageSlider": lazy(() => import("./apps/ImageSlider")), "/jokesGenerator": lazy(() => import("./apps/JokesGenerator")), "/leetSpeak": lazy(() => import("./apps/LeetSpeak")),
    "/lyricsFinder": lazy(() => import("./apps/LyricsFinder")), "/memesGenerator": lazy(() => import("./apps/MemesGenerator")), "/modalComponent": lazy(() => import("./apps/ModalComponent")),
    "/movieSearch": lazy(() => import("./apps/MovieSearch")), "/movieTrailer": lazy(() => import("./apps/MovieTrailer")), "/muiForm": lazy(() => import("./apps/MuiForm")),
    "/paintApp": lazy(() => import("./apps/PaintApp")), "/passwordGenerator": lazy(() => import("./apps/PasswordGenerator")), "/qrcodeGenerator": lazy(() => import("./apps/QrcodeGenerator")),
    "/quizApp": lazy(() => import("./apps/QuizApp")), "/randomQuotes": lazy(() => import("./apps/RandomQuotes")), "/rockPaperScissor": lazy(() => import("./apps/RockPaperScissor")),
    "/scrollProgressIndicator": lazy(() => import("./apps/ScrollProgressIndicator")), "/scrollTo": lazy(() => import("./apps/ScrollTo")), "/searchAutoComplete": lazy(() => import("./apps/SearchAutoComplete")),
    "/sorting": lazy(() => import("./apps/Sorting")), "/starRating": lazy(() => import("./apps/StarRating")), "/sudoku": lazy(() => import("./apps/Sudoku")), "/taskScheduler": lazy(() => import("./apps/TaskScheduler")),
    "/ticTacToe": lazy(() => import("./apps/TicTacToe")), "/todoList": lazy(() => import("./apps/TodoList")), "/toggleTheme": lazy(() => import("./apps/ToggleTheme")),
    "/unicodeExplorer": lazy(() => import("./apps/UnicodeExplorer")), "/weatherApp": lazy(() => import("./apps/WeatherApp")), "/wordMeaning": lazy(() => import("./apps/WordMeaning")),
    "/worldTimeZones": lazy(() => import("./apps/WorldTimeZones")),
};
const socialLinks = [
    { label: "Portfolio", href: "https://www.ashishranjan.net/", Icon: FiGlobe }, { label: "GitHub", href: "https://github.com/a2rp", Icon: FiGithub },
    { label: "CodePen", href: "https://codepen.io/ash1198", Icon: SiCodepen }, { label: "LinkedIn", href: "https://www.linkedin.com/in/aashishranjan", Icon: FiLinkedin },
    { label: "Facebook", href: "https://www.facebook.com/theash.ashish/", Icon: FiFacebook }, { label: "YouTube", href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", Icon: FiYoutube },
    { label: "Email", href: "mailto:ash.ranjan09@gmail.com", Icon: FiMail },
];
const supportLinks = [
    { label: "Support", href: "https://a2rp-donation-page.netlify.app/", Icon: FiMessageCircle }, { label: "Buy Me a Coffee", href: "https://buymeacoffee.com/a2rp", Icon: FiCoffee },
    { label: "Patreon", href: "https://www.patreon.com/a2rp", Icon: FiHeart },
];

const App = () => {
    const [displayMenu, setDisplayMenu] = useState(false);
    const iconRef = useRef(null);
    const menuRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (displayMenu && menuRef.current && !menuRef.current.contains(event.target) && !iconRef.current?.contains(event.target)) setDisplayMenu(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [displayMenu]);

    useEffect(() => setDisplayMenu(false), [location.pathname]);

    const closeMenu = () => setDisplayMenu(false);
    const renderLinks = (links) => links.map(({ name, link }) => <li key={link}><NavLink to={link} onClick={closeMenu}>{name}</NavLink></li>);

    return (
        <>
            <Styled.BgWrapper />
            <ScrollToTop />
            <Styled.Wrapper>
                <Styled.Header>
                    <Styled.SiteName to="/" onClick={closeMenu}><img src={`${import.meta.env.BASE_URL}logo.png`} alt="Ashish Ranjan logo" /><span><strong>React Mini Projects</strong><small>Practical frontend experiments</small></span></Styled.SiteName>
                    <Styled.NavlinksMenuWrapper>
                        <Styled.NavLinksWrapper><NavLink to="/" end>Home</NavLink><NavLink to="/about">About</NavLink><NavLink to="/contact">Contact</NavLink></Styled.NavLinksWrapper>
                        <Styled.MenuWrapper ref={iconRef} type="button" aria-label={displayMenu ? "Close project menu" : "Open project menu"} aria-expanded={displayMenu} onClick={() => setDisplayMenu((isOpen) => !isOpen)}>{displayMenu ? <FiX /> : <FiMenu />}</Styled.MenuWrapper>
                    </Styled.NavlinksMenuWrapper>
                </Styled.Header>

                <Styled.LastUpdateGoBackWrapper><div className="lastUpdated">Last updated: {__BUILD_TIME__}</div><div className="goBack"><Tooltip title="Go back"><IconButton onClick={() => navigate(-1)}><SettingsBackupRestoreIcon sx={{ color: "#fff" }} /></IconButton></Tooltip></div></Styled.LastUpdateGoBackWrapper>

                <Styled.RoutesWrapper>
                    <Suspense key={location.pathname} fallback={<Box sx={{ minHeight: "70vh", display: "flex", justifyContent: "center", alignItems: "center" }}><CircularProgress color="secondary" /></Box>}>
                        <Routes>
                            <Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/contact" element={<Contact />} />
                            {pageLinks.map(({ link }) => { const Component = componentMap[link]; return <Route key={link} path={link} element={<Component />} />; })}
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Suspense>
                </Styled.RoutesWrapper>

                <Styled.Footer>
                    <div className="footerIntro"><span className="footerTitle"><FiShield /> React Mini Projects</span><p>Small tools, games and UI experiments built to practise practical frontend skills.</p></div>
                    <div className="footerGroups"><div><span className="footerLabel">Connect</span><div className="footerSocialLinks">{socialLinks.map(({ label, href, Icon }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}><Icon /></a>)}</div></div><div><span className="footerLabel">Support</span><div className="footerSocialLinks">{supportLinks.map(({ label, href, Icon }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}><Icon /></a>)}</div></div></div>
                    <div className="footerBottom"><span>Copyright Â© {new Date().getFullYear()} <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a></span><span>Built with React and Vite</span></div>
                </Styled.Footer>
            </Styled.Wrapper>

            {displayMenu && <Styled.DisplayMenuWrapper ref={menuRef}><div className="menuInner"><ul><li><NavLink to="/" end onClick={closeMenu}>Home</NavLink></li><li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li><li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>{renderLinks([...pageLinks].reverse())}</ul></div></Styled.DisplayMenuWrapper>}
            <ScrollToTopButton />
        </>
    );
};

export default App;