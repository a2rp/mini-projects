import React from 'react'
import { Outlet } from 'react-router-dom'

const Projects = () => {
    return (
        <div style={{ padding: "15px" }}>
            <Outlet />
        </div>
    )
}

export default Projects

