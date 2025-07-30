import React, { Suspense, lazy } from 'react'
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import { CircularProgress, Box } from '@mui/material'

const Home = lazy(() => import('./pages/home'))
const About = lazy(() => import('./pages/about'))
const Contact = lazy(() => import('./pages/contact'))
const NotFound = lazy(() => import('./pages/notFound'))

export default function App() {
    return (
        <div style={{ background: '#111', minHeight: '100vh', color: '#fff', padding: '2rem' }}>
            <h1>🧪 Mini Project Hub</h1>

            <nav style={{ marginBottom: '1rem' }}>
                <NavLink to="/" style={{ color: '#0ff', marginRight: '1rem' }}>Home</NavLink>
                <NavLink to="/about" style={{ color: '#0ff', marginRight: '1rem' }}>About</NavLink>
                <NavLink to="/contact" style={{ color: '#0ff' }}>Contact</NavLink>
            </nav>

            <Suspense fallback={
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <CircularProgress color="secondary" />
                </Box>
            }>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </div>
    )
}
