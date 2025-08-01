import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import projects from "./projects.json";
import parse from 'html-react-parser';
import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { CiLink } from "react-icons/ci";

const ProjectsList = () => {
    const [projectsList, setProjectsList] = useState(projects);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        const searchedProjects = projects.filter(project => {
            return project.name.toLowerCase().includes(searchText.toLowerCase())
                || project.techStack.toLowerCase().includes(searchText.toLowerCase())
                || project.codeLink.toLowerCase().includes(searchText.toLowerCase())
                || project.liveLink.toLowerCase().includes(searchText.toLowerCase());
        });
        setProjectsList(searchedProjects);
    }, [searchText]);

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <h3 className={styles.heading}>Projects List</h3>

                <TextField
                    value={searchText}
                    onChange={event => setSearchText(event.target.value)}
                    fullWidth
                    className={styles.searchText}
                    label="Search project here"
                    placeholder="Search project here"
                />

                <TableContainer component={Paper} className={styles.tableContainer}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: "#000" }}>
                                <TableCell sx={{ color: "#fff" }}>
                                    Name
                                </TableCell>
                                <TableCell sx={{ color: "#fff" }}>
                                    Tech stack
                                </TableCell>
                                <TableCell sx={{ color: "#fff" }}>
                                    Code link
                                </TableCell>
                                <TableCell sx={{ color: "#fff" }}>
                                    Live link
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {projectsList.map((row, index) => (
                                <TableRow key={index} sx={{ verticalAlign: "top" }}>
                                    <TableCell sx={{ verticalAlign: "top" }}>
                                        {parse(row.name)}
                                    </TableCell>
                                    <TableCell sx={{ verticalAlign: "top" }}>
                                        {row.techStack}
                                    </TableCell>
                                    <TableCell sx={{ verticalAlign: "top" }}>
                                        {row.codeLink.length > 0
                                            && <a
                                                href={row.codeLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <FaGithub style={{ fontSize: "20px", color: "blue" }} />
                                            </a>}
                                    </TableCell>
                                    <TableCell sx={{ verticalAlign: "top" }}>
                                        {row.liveLink.length > 0
                                            && <><NavLink to={row.liveLink} target="_blank">
                                                <CiLink style={{ fontSize: "32px", color: "orangered" }} />
                                            </NavLink></>}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default ProjectsList



