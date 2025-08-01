import React, { Suspense, lazy, useEffect, useRef, useState } from 'react'
import { Routes, Route, Link, NavLink, useNavigate } from 'react-router-dom'
import { CircularProgress, Box, Tooltip, IconButton } from '@mui/material'
import { Styled } from "./App.styled";
import { IoMenu } from 'react-icons/io5';
import ScrollToTop from './components/ScrollToTop';
import GoBackButton from './components/GoBackButton';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';

const Home = lazy(() => import('./pages/home'))
const About = lazy(() => import('./pages/about'))
const Contact = lazy(() => import('./pages/contact'))

const HelloWorld = lazy(() => import('./apps/helloWorld'))
const Accordion = lazy(() => import('./apps/accordion'))
const Avataar = lazy(() => import('./apps/avataar'))

const NotFound = lazy(() => import('./pages/notFound'))

const pageLinks = [
    { name: "Avataars", link: "/avataars" },
    { name: "Accordion", link: "/accordion" },
    { name: "Hello World", link: "/hello-world" },
];

export default function App() {
    const [displayMenu, setDisplayMenu] = useState(false);
    const iconRef = useRef(null);
    const navigate = useNavigate();

    // Handle outside click
    const menuRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                displayMenu &&
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                iconRef.current &&
                !iconRef.current.contains(event.target)
            ) {
                setDisplayMenu(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
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
                            <NavLink
                                to="/"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                            >Home</NavLink>
                            <NavLink
                                to="/about"
                                className={({ isActive }) => (isActive ? 'active' : '')}                        >About</NavLink>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) => (isActive ? 'active' : '')}                        >Contact</NavLink>
                        </Styled.NavLinksWrapper>

                        <Styled.MenuWrapper
                            ref={iconRef}
                            onClick={() => setDisplayMenu(prev => !prev)}
                        >
                            <IoMenu size={20} />
                        </Styled.MenuWrapper>
                    </Styled.NavlinksMenuWrapper>
                </Styled.Header>

                <Styled.LastUpdateGoBackWrapper>
                    <div className="lastUpdated">
                        Last Updated: {__BUILD_TIME__}
                    </div>
                    <div className="goBack">
                        <Tooltip title="Go Back">
                            <IconButton onClick={() => navigate(-1)}>
                                {/* <FaCopy color={"#fff"} /> */}
                                {/* <GoBackButton /> */}
                                <SettingsBackupRestoreIcon sx={{ color: "#fff" }} />
                            </IconButton>
                        </Tooltip>
                    </div>
                </Styled.LastUpdateGoBackWrapper>

                <Styled.RoutesWrapper>
                    <Suspense fallback={
                        <Box sx={{
                            // border: "1px solid #f00",
                            height: "100vh",
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: "center"
                        }}>
                            <CircularProgress color="secondary" />
                        </Box>
                    }>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />

                            <Route path="/avataars" element={<Avataar />} />
                            <Route path="/accordion" element={<Accordion />} />
                            <Route path="/hello-world" element={<HelloWorld />} />

                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Suspense>
                </Styled.RoutesWrapper>

                <Styled.Footer>
                    <div className="col">&copy; {new Date().getFullYear()} | All rights reserved.</div>
                    <div className="col">
                        Designed and developed by '<a href="#">Ashish Ranjan</a>'
                    </div>
                </Styled.Footer>
            </Styled.Wrapper>

            {displayMenu && <>
                <Styled.DisplayMenuWrapper ref={menuRef}>
                    <div className="menuInner">
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            {/* <li><NavLink to="/hello-world">Hello World</NavLink></li> */}
                            {pageLinks.map((item, index) => (
                                <li key={index}>
                                    <NavLink to={item.link}>{item.name}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Styled.DisplayMenuWrapper>
            </>}
        </>
    )
}

